package codexist.GeoFinder.controller;

import codexist.GeoFinder.repository.PlaceRepository;
import codexist.GeoFinder.model.Place;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
public class PlaceController {

    @Autowired
    private PlaceRepository placeRepository;
    @GetMapping("/places")
    public List<Place> getAllEmployees(){
        return placeRepository.findAll();
    }
    @PostMapping("/places")
    public Place createPlace(@RequestBody Place place){
        return placeRepository.save(place);
    }
}
