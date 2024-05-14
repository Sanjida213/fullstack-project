package com.example.api;


public class TvShowNotFoundException extends RuntimeException {
    public TvShowNotFoundException() {
        super("Tv show has not been found");
    }
}