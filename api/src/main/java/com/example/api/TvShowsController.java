package com.example.api;

import com.example.api.models.TvShow;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5174/")
public class TvShowsController {

    @ExceptionHandler
    public ResponseEntity<String> handleExceptions(Exception exception) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(exception.getMessage());
    }

    // CREATE

    @PostMapping("/tvShow")
    public ResponseEntity<TvShow> createGreeting(@RequestBody TvShow tvShow) {
//        TvShow newTvShow = tvShow.ad(greeting);
        return ResponseEntity.status(HttpStatus.CREATED).body(newGreeting);
    }

    // READ

//    @GetMapping("/tvShows")
//    public ResponseEntity<TvShow> getTvShows(@RequestBody(required = false) String tvShowName) {
//
////        if (tvShowName != null) {
////            return ResponseEntity.status(HttpStatus.OK).body(greetingService.getGreetingsByCountryName(countryName, limit));
////        }
//
//        return ResponseEntity.status(HttpStatus.OK).body(TvShowService.getAllGreetings(limit));
//    }

    @GetMapping("/tvShows/ids")
    public ResponseEntity<List<Long>> getGreetingsIds() {
        return ResponseEntity.status(HttpStatus.OK).body(TvShowsService.getTVShowIds());
    }

}
