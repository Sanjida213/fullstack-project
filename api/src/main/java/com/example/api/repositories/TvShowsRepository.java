package com.example.api.repositories;

import com.example.api.models.TvShow;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface TvShowsRepository extends JpaRepository<TvShow, Long> {

    // READ
    List<TvShow> getAllByTvShowByName(String tvShowName);

    @Query(value="SELECT DISTINCT id FROM tvShow ", nativeQuery = true)
    List<Long> getDistinctIds();

    @Query(value="SELECT * FROM greeting ORDER BY RAND() LIMIT 1", nativeQuery = true)
    TvShow getRandomTvShow();


    // DELETE
    void deleteTvShowById(long id);
}
