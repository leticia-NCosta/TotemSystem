/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package br.com.sptech.totemsistem;

import org.apache.commons.dbcp2.BasicDataSource;

/**
 *
 * @author Aluno
 */
public class Connection {
    
    private BasicDataSource dataSource;

    public Connection() {
        this.dataSource = new BasicDataSource();
        
        dataSource​.setDriverClassName("org.h2.Driver");
        dataSource​.setUrl("jdbc:h2:file:./meu_banco");
        dataSource​.setUsername("sa");
        dataSource​.setPassword("");
    }

    public BasicDataSource getDataSource() {
        return dataSource;
    }
    
}
