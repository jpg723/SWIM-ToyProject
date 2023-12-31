package com.example.demo.domain;

import java.io.Serializable;

@SuppressWarnings("serial")
public class Comment implements Serializable {
    private String writer, comment_create_date, comment_content;
    private int comment_id, study_id;

    public int getComment_id() {
        return comment_id;
    }

    public void setComment_id(int comment_id) {
        this.comment_id = comment_id;
    }

    public String getWriter() {
        return writer;
    }

    public void setWriter(String writer) {
        this.writer = writer;
    }

    public String getComment_create_date() {
        return comment_create_date;
    }

    public void setComment_create_date(String comment_create_date) {
        this.comment_create_date = comment_create_date;
    }

    public String getComment_content() {
        return comment_content;
    }

    public void setComment_content(String comment_content) {
        this.comment_content = comment_content;
    }

    public int getStudy_id() {
        return study_id;
    }

    public void setStudy_id(int study_id) {
        this.study_id = study_id;
    }

    @Override
    public String toString() {
        StringBuilder builder = new StringBuilder();
        builder.append("Comment [comment_id=");
        builder.append(comment_id);
        builder.append(", writer=");
        builder.append(writer);
        builder.append(", comment_create_date=");
        builder.append(comment_create_date);
        builder.append(", comment_content=");
        builder.append(comment_content);
        return builder.toString();
    }
}
