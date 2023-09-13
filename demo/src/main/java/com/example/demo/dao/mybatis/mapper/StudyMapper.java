package com.example.demo.dao.mybatis.mapper;

import com.example.demo.domain.Study;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface StudyMapper {

	//스터디 등록
	void registerStudy(Study study);
	//스터디 전체 조회
	List<Study> getStudyList();
	//스터디 상세 조회
	Study getStudy(int study_id);
	//스터디 카테고리별 조회
	List<Study> getStudyCategory(String study_category);
}