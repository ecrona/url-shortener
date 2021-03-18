package com.ecrona.urlshortener.controllers;

import javax.persistence.EntityNotFoundException;

import com.ecrona.urlshortener.dto.CreateUrlRequest;
import com.ecrona.urlshortener.dto.UpdateUrlRequest;
import com.ecrona.urlshortener.services.EncodingService;
import com.ecrona.urlshortener.services.UrlService;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/urls")
public class UrlController {
    private final EncodingService encodingService;
    private final UrlService urlService;

    public UrlController(EncodingService encodingService, UrlService urlService) {
        this.encodingService = encodingService;
        this.urlService = urlService;
    }

    @PostMapping()
    public String create(@RequestBody CreateUrlRequest request) {
        String url = request.getUrl();
        int id = this.urlService.createUrl(url);

        return this.encodingService.encode(id);
    }

    @PutMapping()
    public String update(@RequestBody UpdateUrlRequest request) {
        String shortUrlIdentifier = request.getShortUrlIdentifier();
        String url = request.getUrl();

        try {
            this.urlService.updateUrl(this.encodingService.decode(shortUrlIdentifier), url);
        } catch (EntityNotFoundException e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }

        return shortUrlIdentifier;
    }
}
