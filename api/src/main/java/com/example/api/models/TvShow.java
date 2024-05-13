package com.example.api.models;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

public class TvShow {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String tvShow;
    private String genre;
    private String yearReleased;
    private int Rating;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getGenre() {
        return genre;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

    public String getTvShow() {
        return tvShow;
    }

    public void setTvShow(String tvShow) {
        this.tvShow = tvShow;
    }

    public String getYearReleased() {
        return yearReleased;
    }

    public void setYearReleased(String yearReleased) {
        this.yearReleased = yearReleased;
    }

    public int getRating() {
        return Rating;
    }

    public void setRating(int rating) {
        Rating = rating;
    }

    @Override
    public String toString() {
        return "TvShow{" +
                "id=" + id +
                ", tvShow='" + tvShow + '\'' +
                ", genre='" + genre + '\'' +
                ", yearReleased='" + yearReleased + '\'' +
                ", Rating=" + Rating +
                '}';
    }
}
