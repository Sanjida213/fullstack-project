package com.example.api.repositories;

import com.example.api.models.TvShow;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface TvShowsRepository extends JpaRepository<TvShow, Long> {

    List<TvShow> getAllByTitle(String title);

    @Query(value="SELECT DISTINCT id FROM tvShows ", nativeQuery = true)
    List<Long> getDistinctIds();

    @Query(value="SELECT * FROM tvShows ORDER BY RAND() LIMIT 1", nativeQuery = true)
    TvShow getRandomTvShow();


    void deleteTvShowById(long id);
}
