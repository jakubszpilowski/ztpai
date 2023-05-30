package com.projekt.backend.service;

import com.projekt.backend.model.Tag;
import com.projekt.backend.repository.TagRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class TagService {
    private final TagRepository tagRepository;

    public List<Tag> createTags(List<String> tagsNames) {
        List<Tag> tags = new ArrayList<>();
        System.out.println(tagsNames.size());

        for(String t: tagsNames) {
            Tag tag = tagRepository.findByName(t);
            if(tag == null) {
                tag = new Tag();
                tag.setName(t);
                tag = tagRepository.save(tag);
            }
            tags.add(tag);
        }

        return tags;
    }
}
