package com.ecrona.urlshortener.controllers;

import javax.persistence.EntityNotFoundException;
import javax.servlet.http.HttpServletResponse;

import com.ecrona.urlshortener.services.EncodingService;
import com.ecrona.urlshortener.services.UrlService;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

@RestController
@RequestMapping("/l")
public class LookupController {
    private final EncodingService encodingService;
    private final UrlService urlService;

    public LookupController(EncodingService encodingService, UrlService urlService) {
        this.encodingService = encodingService;
        this.urlService = urlService;
    }

    @GetMapping(value = "{shortUrl}")
    public void lookup(HttpServletResponse httpServletResponse, @PathVariable String shortUrl) {
        try {
            int id = this.encodingService.decode(shortUrl);
            String url = urlService.getUrl(id);

            httpServletResponse.setHeader("Location", url);
            httpServletResponse.setStatus(302);
        } catch (EntityNotFoundException e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }
}
