/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.banco.pesquisa.inovacao;

import org.apache.commons.dbcp2.BasicDataSource;

public class connection {

    private BasicDataSource dataSource;  

    public connection() {
        dataSource = new BasicDataSource();
        dataSource​.setDriverClassName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
        // aqui acho
        dataSource​.setUrl("jdbc:sqlserver://svr-totem-system.database.windows.net:1433;database=bd-totem-system;user=admin-totem-system@svr-totem-system;password=");
        dataSource​.setUsername("admin-totem-system");
        dataSource​.setPassword("2ads#grupo9");
    }

    public BasicDataSource getDataSource() {
        return dataSource;
    }



}
