package codexist.GeoFinder.controller;

import codexist.GeoFinder.exception.ResourceNotFoundException;
import codexist.GeoFinder.repository.PlaceRepository;
import codexist.GeoFinder.model.Place;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1")
public class PlaceController {

    @Autowired
    private PlaceRepository placeRepository;

    @GetMapping("/places")
    public List<Place> getAllPlaces() {
        return placeRepository.findAll();
    }

    @PostMapping("/places")
    public Place createPlace(@RequestBody Place place) {
        return placeRepository.save(place);
    }

    @GetMapping("places/{id}")
    public ResponseEntity<Place>  getPlaceById(@PathVariable Long id){
        Place place=placeRepository.findById(id)
                .orElseThrow(()->new ResourceNotFoundException("Place not exist with "+id+" id"));
        return ResponseEntity.ok(place);
    }

    public ResponseEntity<Place> updatePlace(@PathVariable Long id,@RequestBody Place placeDetails){
        Place place=placeRepository.findById(id)
                .orElseThrow(()-> new ResourceNotFoundException("Place not exist with "+id+" id"));
        place.setName(placeDetails.getName());
        place.setLatitude(placeDetails.getLatitude());
        place.setLongitude(placeDetails.getLongitude());

        Place updatedPlace =placeRepository.save(place);
        return ResponseEntity.ok(updatedPlace);
    }
}
