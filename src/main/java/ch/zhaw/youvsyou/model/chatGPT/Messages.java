package ch.zhaw.youvsyou.model.chatGPT;

import java.util.ArrayList;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class Messages {
    private final String model = "gpt-3.5-turbo";
    private ArrayList<Message> messages;
}