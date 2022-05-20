/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package br.com.sptech.totemsistem;

import java.io.IOException;
import org.json.JSONObject;

/**
 *
 * @author Aluno
 */
public class App {
    public static void main(String[] args) throws IOException, InterruptedException {
        JSONObject json = new JSONObject();
        json.put("text", "huk");
        Slack.sendMessage(json);
        
        
        Logs log = new Logs();
        log.gerarLog("Primeiro Log");
                
    }
}
