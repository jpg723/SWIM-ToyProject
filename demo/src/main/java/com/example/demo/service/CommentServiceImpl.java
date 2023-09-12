package com.example.demo.service;

import com.example.demo.dao.CommentDao;
import com.example.demo.domain.Comment;
import com.example.demo.domain.Study;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommentServiceImpl implements CommentService {

    @Autowired
    private CommentDao commentDao;

    @Override /*댓글 등록*/
    public void registerComment(Comment comment) {
        commentDao.registerComment(comment);
    }
    @Override /*댓글 조회*/
    public List<Comment> getComment(int study_id) {
        return commentDao.getComment(study_id);
    }
}
