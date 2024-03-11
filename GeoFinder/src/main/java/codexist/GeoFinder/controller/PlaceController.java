package codexist.GeoFinder.controller;

import codexist.GeoFinder.exception.ResourceNotFoundException;
import codexist.GeoFinder.repository.PlaceRepository;
import codexist.GeoFinder.model.Place;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import org.springframework.web.bind.annotation.CrossOrigin;
import java.util.Map;

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

    @GetMapping("/places/nearby")
    public List<Place> getNearbyPlaces(@RequestParam("latitude") Double latitude,
                                       @RequestParam("longitude") Double longitude,
                                       @RequestParam("distance") Double distance) {
        List<Place> allPlaces=placeRepository.findAll();
        List<Place> nearbyPlaces = new LinkedList<>();
        //every adding costs much in ArrayList and ArrayList's finding is O(1) and adding is O(n)
        // But in that situation we are sending whole list so adding should be cheap and LinkedList adding is O(1)
        //so LinkedList is much better in that situation

        distance/=111; //instead changing 2 latitudes and longitudes to kilometer
        //changing 1 distance variable to longitude-latitude
        for(Place place:allPlaces){
            double latitudeDistance=(latitude-place.getLatitude());
            double longitudeDistance=(longitude-place.getLongitude());

            if(longitudeDistance>distance||latitudeDistance>distance)//do not have to calculate
                continue;
            double realDistance=Math.sqrt(longitudeDistance*latitudeDistance);
            if(realDistance<=distance)
                nearbyPlaces.add(place);
        }
        return  nearbyPlaces;
    }

    @PutMapping("/places/{id}")
    public ResponseEntity<Place> updatePlace(@PathVariable Long id,@RequestBody Place placeDetails){
        Place place=placeRepository.findById(id)
                .orElseThrow(()-> new ResourceNotFoundException("Place not exist with "+id+" id"));
        place.setName(placeDetails.getName());
        place.setLatitude(placeDetails.getLatitude());
        place.setLongitude(placeDetails.getLongitude());

        Place updatedPlace =placeRepository.save(place);
        return ResponseEntity.ok(updatedPlace);
    }
    @DeleteMapping("/places/{id}")
    public ResponseEntity<Map<String,Boolean>> deletePlace(@PathVariable Long id){
        Place place=placeRepository.findById(id)
            .orElseThrow(()-> new ResourceNotFoundException("Place not exist with "+id+" id"));
        placeRepository.delete(place);
        Map<String,Boolean> response =new HashMap<>();
        response.put("deleted",Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}
