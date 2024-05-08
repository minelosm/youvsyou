package ch.zhaw.youvsyou.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Getter
@AllArgsConstructor
public class FitnessuserCreateDTO {
    private String email;
    private String name;
    private String birthDate;
    private String height;
    private String weight;
    
}
