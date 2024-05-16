package com.example.api.models;

import jakarta.persistence.*;

@Entity
@Table(name = "tvshows")
public class TvShow {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String title;
    private String year_released;
    private String rating;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getYear_released() {
        return year_released;
    }

    public void setYear_released(String year_released) {
        this.year_released = year_released;
    }

    public String getRating() {
        return rating;
    }

    public void setRating(String rating) {
        this.rating = rating;
    }

    @Override
    public String toString() {
        return "TvShow{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", year_released='" + year_released + '\'' +
                ", rating=" + rating +
                '}';
    }
}
