package com.example.api.models;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

public class TvShow {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String tvShowName;
    private String tvShowUrl;
    private String genreType;
    private int rating;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getTvShowName() {
        return tvShowName;
    }

    public void setTvShowName(String tvShowName) {
        this.tvShowName = tvShowName;
    }

    public String getTvShowUrl() {
        return tvShowUrl;
    }

    public void setTvShowUrl(String tvShowUrl) {
        this.tvShowUrl = tvShowUrl;
    }

    public String getGenreType() {
        return genreType;
    }

    public void setGenreType(String genreType) {
        this.genreType = genreType;
    }

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }

    @Override
    public String toString() {
        return "TvShow{" +
                "id=" + id +
                ", tvShowName='" + tvShowName + '\'' +
                ", tvShowUrl='" + tvShowUrl + '\'' +
                ", genreType='" + genreType + '\'' +
                ", rating=" + rating +
                '}';
    }
}
