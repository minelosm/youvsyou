package ch.zhaw.youvsyou.model;

import java.util.ArrayList;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.format.annotation.DateTimeFormat;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@RequiredArgsConstructor
@Document("balanceAccount")
public class BalanceAccount {
    @Id private String id;
    @NonNull private String userEmail;
    private Double balance;
    private List<Transaction> transactions = new ArrayList<>();

    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Transaction {
        private Double amount;
        @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME)
        private String transactionDate;
        private String description;
    }
}
