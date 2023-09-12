package com.example.demo.dao.mybatis.mapper;

import com.example.demo.domain.Comment;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface CommentMapper {

	//댓글 등록
	void registerComment(Comment comment);
}