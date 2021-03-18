package com.ecrona.urlshortener.repositories;

import com.ecrona.urlshortener.entities.UrlEntity;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UrlRepository extends JpaRepository<UrlEntity, Integer> {
}
