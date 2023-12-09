package com.steamchain.SteamChain.controller;
import java.nio.file.Paths;
import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.Path;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.steamchain.SteamChain.infra.FileStorageProperties;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;

import jakarta.annotation.security.PermitAll;
import jakarta.servlet.http.HttpServletRequest;


@RestController
@PermitAll
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/api/file")
public class FileStorageController {

    private final Path fileStorageLocation;

    public FileStorageController(FileStorageProperties fileStorageProperties) {
        this.fileStorageLocation = Paths.get(fileStorageProperties.getUploadDir()).toAbsolutePath().normalize();
         
    }
   @GetMapping("/download/{fileName:.+}")
   public ResponseEntity<Resource> downloadFile(@PathVariable String fileName, HttpServletRequest request) throws IOException {
    
    Path filePath = fileStorageLocation.resolve(fileName).normalize();
       
       try {
            Resource resource = new UrlResource(filePath.toUri());
            String contentType = request.getServletContext().getMimeType(resource.getFile().getAbsolutePath());
           if(contentType == null) {
               contentType = "application/octet-stream";
           }
           return ResponseEntity.ok()
                   .contentType(MediaType.parseMediaType(contentType))
                   .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + resource.getFilename() + "\"")
                   .body(resource);
       } catch (MalformedURLException e) {
           return ResponseEntity.badRequest().build();
       }
   }
   
}


