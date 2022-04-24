package br.com.sptech.totemsistem;

import org.apache.commons.dbcp2.BasicDataSource;

public class Connection {

    private BasicDataSource dataSource;

    public Connection() {
        this.dataSource = new BasicDataSource();

        //local
        dataSource.setDriverClassName("com.mysql.cj.jdbc.Driver");
        dataSource.setUrl("jdbc:mysql://127.0.0.1:3306/TotemSystem");
        dataSource.setUsername("urubu100");
        dataSource.setPassword("urubu100");

        //azure
        /*

        dataSource.setDriverClassName("com.mysql.cj.jdbc.Driver");
        dataSource.setUrl("jdbc:mysql://127.0.0.1:3306/TotemSystem");
        dataSource.setUsername("221-2adsb-grupo9@bandtec.com.br");
        dataSource.setPassword("2ads#grupo9");

        */
    }

    public BasicDataSource getDataSource() {
        return dataSource;
    }

}
