package ch.zhaw.youvsyou.service;

import java.time.Duration;
import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import ch.zhaw.youvsyou.model.chatGPT.Message;
import ch.zhaw.youvsyou.model.chatGPT.MessageResponse;
import ch.zhaw.youvsyou.model.chatGPT.Messages;
import reactor.core.publisher.Mono;

@Service
public class ChatGPTService {
        private static final String CHAT_GPT_API_KEY = "sk-proj-fqVZFDRjdJeb7Iuu6ENRT3BlbkFJ9LYICq2efCCMXpijXy4z";
        private static final String CHAT_GPT_BASE_URL = "https://api.openai.com";
        // Timeout was set to 10 seconds, because chat-gpt tends to take a few seconds
        // to respond.
        private static final Duration REQUEST_TIMEOUT = Duration.ofSeconds(15);
        private static final String USER_AGENT = "Spring 5 WebClient";
        private static final Logger logger = LoggerFactory.getLogger(ChatGPTService.class);
        private final WebClient webClient;

        public ChatGPTService() {
                this.webClient = WebClient.builder()
                                .baseUrl(CHAT_GPT_BASE_URL)
                                .defaultHeader(HttpHeaders.CONTENT_TYPE,
                                                MediaType.APPLICATION_JSON_VALUE)
                                .defaultHeader(HttpHeaders.USER_AGENT, USER_AGENT)
                                .defaultHeader(HttpHeaders.AUTHORIZATION, "Bearer " +
                                                CHAT_GPT_API_KEY)
                                .build();
        }

        public MessageResponse chatWithChatGpt(String messageContent) {
                Messages messages = new Messages();
                Message message = new Message();
                message.setRole("user");
                message.setContent(messageContent);
                messages.setMessages(new ArrayList<Message>(List.of(message)));
                Gson gson = new GsonBuilder().create();
                logger.info(gson.toJson(messages));
                var messageResposen = webClient
                                // http-method
                                .post()
                                // uri to api
                                .uri("/v1/chat/completions")
                                // converts the class to json and uses it as request body (serialization).
                                .body(Mono.just(messages), Messages.class)
                                .retrieve()
                                // conversts the response to a java object (deserialization).
                                .bodyToMono(MessageResponse.class)
                                .block(REQUEST_TIMEOUT);
                return messageResposen;
        }
}