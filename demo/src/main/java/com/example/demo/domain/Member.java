package com.example.demo.domain;

import java.io.Serializable;

@SuppressWarnings("serial")
public class Member implements Serializable{
	
	private String user_id, password, user_name, phone, profile;
	
	public String getUser_id() {
		return user_id;
	}
	public void setUser_id(String user_id) {
		this.user_id = user_id;
	}
	
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
	public String getUser_name() {
		return user_name;
	}
	public void setUser_name(String phone) {
		this.phone = phone;
	}
	
	public String getPhone() {
		return user_name;
	}
	public String getProfile() {
		return profile;
	}
	public void setProfile(String profile) {
		this.profile = profile;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
			
	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("Member [user_id=");
		builder.append(user_id);
		builder.append(", password=");
		builder.append(password);
		builder.append(", user_name=");
		builder.append(user_name);
		builder.append(", phone=");
		builder.append(phone);
		builder.append(", profile=");
		builder.append(profile);
		builder.append("]");
		return builder.toString();
	}
}

