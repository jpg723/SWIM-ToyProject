package com.example.demo.domain;

import java.io.Serializable;
import java.util.Date;

@SuppressWarnings("serial")
public class Study implements Serializable{
	
	private String study_id, study_title, study_category, study_onoff,
			study_region, writer, study_content, study_create_date, study_update_date;
	private int study_num;

	public String getStudy_id() {
		return study_id;
	}

	public void setStudy_id(String study_id) {
		this.study_id = study_id;
	}

	public String getStudy_title() {
		return study_title;
	}

	public void setStudy_title(String study_title) {
		this.study_title = study_title;
	}

	public String getStudy_category() {
		return study_category;
	}

	public void setStudy_category(String study_category) {
		this.study_category = study_category;
	}

	public String getStudy_onoff() {
		return study_onoff;
	}

	public void setStudy_onoff(String study_onoff) {
		this.study_onoff = study_onoff;
	}

	public String getStudy_region() {
		return study_region;
	}

	public void setStudy_region(String study_region) {
		this.study_region = study_region;
	}

	public String getWriter() {
		return writer;
	}

	public void setWriter(String writer) {
		this.writer = writer;
	}
	public String getStudy_content() {
		return study_content;
	}

	public void setStudy_content(String study_content) {
		this.study_content = study_content;
	}

	public int getStudy_num() {
		return study_num;
	}

	public void setStudy_num(int study_num) {
		this.study_num = study_num;
	}

	public String getStudy_create_date() {
		return study_create_date;
	}

	public void setStudy_create_date(String study_create_date) {
		this.study_create_date = study_create_date;
	}

	public String getStudy_update_date() {
		return study_update_date;
	}

	public void setStudy_update_date(String study_update_date) {
		this.study_update_date = study_update_date;
	}

	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("Member [study_id=");
		builder.append(study_id);
		builder.append(", study_title=");
		builder.append(study_title);
		builder.append(", study_category=");
		builder.append(study_category);
		builder.append(", study_num=");
		builder.append(study_num);
		builder.append(", study_onoff=");
		builder.append(study_onoff);
		builder.append(", study_region=");
		builder.append(study_region);
		builder.append(", writer=");
		builder.append(writer);
		builder.append(", study_content=");
		builder.append(study_content);
		builder.append("]");
		return builder.toString();
	}
}

