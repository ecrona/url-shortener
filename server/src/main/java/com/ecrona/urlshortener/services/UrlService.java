package com.ecrona.urlshortener.services;

import java.util.Date;

import javax.persistence.EntityNotFoundException;

import com.ecrona.urlshortener.entities.UrlEntity;
import com.ecrona.urlshortener.repositories.UrlRepository;

import org.springframework.stereotype.Service;

@Service
public class UrlService {
    private final UrlRepository urlRepository;

    public UrlService(UrlRepository urlRepository) {
        this.urlRepository = urlRepository;
    }

    private UrlEntity getUrlEntity(int id) {
        return urlRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("There is no entity with id " + id));
    }

    public int createUrl(String url) {
        UrlEntity entity = new UrlEntity();
        entity.setLongUrl(url);
        entity.setCreated(new Date());

        return urlRepository.save(entity).getId();
    }

    public void updateUrl(int id, String url) {
        UrlEntity entity = this.getUrlEntity(id);
        entity.setLongUrl(url);
        urlRepository.save(entity);
    }

    public String getUrl(int id) {
        return this.getUrlEntity(id).getLongUrl();
    }
}
