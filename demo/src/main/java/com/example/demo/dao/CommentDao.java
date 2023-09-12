package com.example.demo.dao;

import com.example.demo.domain.Comment;
import com.example.demo.domain.Study;
import org.springframework.dao.DataAccessException;

import java.util.List;


public interface CommentDao {

	//댓글 등록
	void registerComment(Comment comment) throws DataAccessException;
	//댓글 조회
	Comment getComment(int comment_id) throws DataAccessException;
}
