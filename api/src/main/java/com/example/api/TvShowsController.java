package com.example.api;

import com.example.api.models.TvShow;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5173/")
public class TvShowsController {

    @Autowired
    private TvShowsService tvShowsService;


    @ExceptionHandler
    public ResponseEntity<String> handleExceptions(Exception exception) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(exception.getMessage());
    }

    // CREATE

    @PostMapping("/tvShow")
    public ResponseEntity<TvShow> createGreeting(@RequestBody TvShow tvShow) {
       tvShowsService.addTvShow(tvShow);
       return ResponseEntity.status(HttpStatus.CREATED).body(tvShow);
    }

    // READ

    @GetMapping
    public ResponseEntity<List<TvShow>> getTvShows(@RequestParam(required = false) String tvShowName, @RequestParam(defaultValue = "100") int limit) {
        if (tvShowName != null && !tvShowName.isEmpty()) {
            return ResponseEntity.status(HttpStatus.OK).body(tvShowsService.getTvShowByName(tvShowName, limit));
        } else {
            return ResponseEntity.status(HttpStatus.OK).body(tvShowsService.getAllTvShows(limit));
        }
    }


    @GetMapping("/tvShow/ids")
    public ResponseEntity<List<Long>> getTvShowsIds() {
        return ResponseEntity.status(HttpStatus.OK).body(tvShowsService.getTvShowsIds());
    }

    @GetMapping("/tvShow/{id}")
    public ResponseEntity<TvShow> getTvShowById(@PathVariable long id) {
        return ResponseEntity.status(HttpStatus.OK).body(tvShowsService.getTvShowById(id));
    }

    @GetMapping("/tvShow/random")
    public ResponseEntity<TvShow> getRandomTvShow() {
        return ResponseEntity.status(HttpStatus.OK).body(tvShowsService.getRandomTvShow());
    }

    // UPDATE

    @PutMapping("/tvShow/{id}")
    public ResponseEntity<TvShow> updateTvShow(@RequestBody TvShow newTvShow, @PathVariable long id) {
        newTvShow.setId(id);
        tvShowsService.updateTvShow(newTvShow, id);
        return ResponseEntity.status(HttpStatus.OK).body(newTvShow);
    }

    // DELETE

    @DeleteMapping("/tvShow/{id}")
    public ResponseEntity<Void> deleteTvShowById(@PathVariable long id) {
        tvShowsService.deleteTvShowById(id);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }
}
