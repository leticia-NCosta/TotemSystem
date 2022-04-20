package br.com.sptech.totemsistem;

import org.apache.commons.dbcp2.BasicDataSource;

public class Connection {

    private BasicDataSource dataSource;

    public Connection() {
        this.dataSource = new BasicDataSource();

        dataSource.setDriverClassName("com.mysql.cj.jdbc.Driver");
        dataSource.setUrl("jdbc:mysql://127.0.0.1:3306/TotemSystem");
        dataSource.setUsername("aluno");
        dataSource.setPassword("sptech");
    }

    public BasicDataSource getDataSource() {
        return dataSource;
    }

}
