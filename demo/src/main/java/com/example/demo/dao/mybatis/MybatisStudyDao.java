package com.example.demo.dao.mybatis;

import com.example.demo.dao.StudyDao;
import com.example.demo.dao.mybatis.mapper.StudyMapper;
import com.example.demo.domain.Study;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public class MybatisStudyDao implements StudyDao {
	
	@Autowired
	private StudyMapper studyMapper;

	//스터디 등록
	@Override
	public void registerStudy(Study study) throws DataAccessException {
		studyMapper.registerStudy(study);
	}
	//스터디 전체 조회
	@Override
	public List<Study> getStudyList() throws DataAccessException {
		return studyMapper.getStudyList();
	}
	//스터디 상세 조회
	@Override
	public Study getStudy(int study_id) throws DataAccessException {
		return studyMapper.getStudy(study_id);
	}
	//스터디 카테고리별 조회
	@Override
	public List<Study> getStudyCategory(String study_category) throws DataAccessException {
		return studyMapper.getStudyCategory(study_category);
	}
}