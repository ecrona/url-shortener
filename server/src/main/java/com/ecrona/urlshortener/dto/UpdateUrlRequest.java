package com.ecrona.urlshortener.dto;

public class UpdateUrlRequest {
    private String shortUrlIdentifier;
    private String url;

    public String getShortUrlIdentifier() {
        return this.shortUrlIdentifier;
    }

    public String getUrl() {
        return this.url;
    }

}
