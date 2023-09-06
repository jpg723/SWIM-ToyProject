package com.example.demo.dao.mybatis.mapper;

import com.example.demo.domain.Study;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface StudyMapper {
  
	void registerStudy(Study study); //새 글 등록
}