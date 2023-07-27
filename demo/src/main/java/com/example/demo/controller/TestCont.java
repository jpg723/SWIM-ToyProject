package com.example.demo.controller;

import java.sql.Connection;
import java.sql.PreparedStatement;
import javax.sql.DataSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.example.demo.service.MemberServiceImpl;

/**
 * @author Juergen Hoeller
 * @since 30.11.2003
 * @modified-by Changsup Park
 */
@Controller
public class TestCont { 

   @Autowired
   DataSource ds;
   
   @Autowired
   MemberServiceImpl memberService;
   
   @RequestMapping(value="/test/{id}/{password}/{name}/{phone}", method = RequestMethod.GET)
   public String handleRequest2(@PathVariable String id, @PathVariable String password, @PathVariable String name, @PathVariable String phone) 
           throws Exception {
      System.out.println(id + ", " + name);
      Connection conn = ds.getConnection();
      PreparedStatement stmt = conn.prepareStatement(
         "INSERT INTO Member (User_ID, PASSWORD, NAME, PHONE) VALUES (?, ?, ?, ?)");
      stmt.setString(1, id);
      stmt.setString(2, password);
      stmt.setString(3, name);
      stmt.setString(4, phone);
      stmt.executeUpdate();
      System.out.println("inserted");     
      return "redirect:/";
   }
   
  
}