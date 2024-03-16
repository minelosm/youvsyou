package ch.zhaw.youvsyou.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;

@NoArgsConstructor
@RequiredArgsConstructor
@Getter
@Document("fitnessuser")
public class Fitnessuser {
    @Id
    private String id;
    @NonNull
    private String email;
    @NonNull
    private String name;
    @NonNull
    private String birthDate;
    @NonNull
    private String height;
    @NonNull
    private String weight;
}