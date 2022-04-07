package br.com.sptech.totemsistem;

import org.springframework.jdbc.core.JdbcTemplate;

public class App {
    public static void main(String[] args) {
        Connection config = new Connection();
        
        JdbcTemplate template = new JdbcTemplate(config.getDataSource());
    }
}
