package com.example.demo.dao;

import com.example.demo.domain.Comment;
import org.springframework.dao.DataAccessException;


public interface CommentDao {

	//댓글 등록
	void registerComment(Comment comment) throws DataAccessException;
}
