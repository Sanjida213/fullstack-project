package com.example.api;

import com.example.api.models.TvShow;
import com.example.api.repositories.TvShowsRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class TvShowsService {

    @Autowired
    TvShowsRepository tvShowsRepository;


    public void addTvShow(TvShow tvShow) {
        tvShowsRepository.save(tvShow);
    }


    public TvShow getTvShowById(long id) {
        Optional<TvShow> tvShow = tvShowsRepository.findById(id);

        if (tvShow.isEmpty()) {
            throw new TvShowNotFoundException();
        }

        return tvShow.get();
    }

    public TvShow getRandomTvShow() {
        return tvShowsRepository.getRandomTvShow();
    }

    public List<Long> getTvShowsIds() {
        return tvShowsRepository.getDistinctIds();
    }

    public List<TvShow> getTvShowByTitle(String title, int limit) {
        List<TvShow> tvShows = tvShowsRepository.getAllByTitle(title);

        return tvShows
                .stream()
                .limit(limit)
                .collect(Collectors.toList());
    }


    public List<TvShow> getAllTvShows(int limit) {
        return tvShowsRepository
                .findAll()
                .stream()
                .limit(limit)
                .collect(Collectors.toList());

    }


    @Modifying
    public void updateTvShow(TvShow newTvShow, long id) {

        if (!tvShowsRepository.existsById(id)) {
            throw new TvShowNotFoundException();
        }
        newTvShow.setId(id);
        tvShowsRepository.save(newTvShow);
    }


    @Transactional
    public void deleteTvShowById(long id) {
        if (!tvShowsRepository.existsById(id)) {
            throw new TvShowNotFoundException();
        }

        tvShowsRepository.deleteTvShowById(id);
    }

}
