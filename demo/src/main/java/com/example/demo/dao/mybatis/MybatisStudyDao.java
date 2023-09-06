package com.example.demo.dao.mybatis;

import com.example.demo.dao.StudyDao;
import com.example.demo.dao.mybatis.mapper.StudyMapper;
import com.example.demo.domain.Study;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Repository;


@Repository
public class MybatisStudyDao implements StudyDao {
	
	@Autowired
	private StudyMapper studyMapper;

	@Override
	public void registerStudy(Study study) throws DataAccessException {
		studyMapper.registerStudy(study);
	}
}