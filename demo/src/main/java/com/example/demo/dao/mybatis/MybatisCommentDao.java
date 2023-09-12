package com.example.demo.dao.mybatis;

import com.example.demo.dao.CommentDao;
import com.example.demo.dao.StudyDao;
import com.example.demo.dao.mybatis.mapper.CommentMapper;
import com.example.demo.dao.mybatis.mapper.StudyMapper;
import com.example.demo.domain.Comment;
import com.example.demo.domain.Study;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public class MybatisCommentDao implements CommentDao {
	
	@Autowired
	private CommentMapper commentMapper;

	//댓글 등록
	@Override
	public void registerComment(Comment comment) throws DataAccessException {
		commentMapper.registerComment(comment);
	}
}