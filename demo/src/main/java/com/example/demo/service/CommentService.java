package com.example.demo.service;

import com.example.demo.domain.Comment;
import com.example.demo.domain.Study;

import java.util.List;

public interface CommentService {
    void registerComment(Comment comment); //댓글 등록
    Comment getComment(int comment_id); //댓글 조회
}
