package com.example.demo.service;

import com.example.demo.dao.StudyDao;
import com.example.demo.domain.Study;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudyServiceImpl implements StudyService {

    @Autowired
    private StudyDao studyDao;

    @Override /*새 글 등록*/
    public void registerStudy(Study study) {
        studyDao.registerStudy(study);
    }
    @Override /*스터디 전체 조회*/
    public List<Study> getStudyList() {
        return studyDao.getStudyList();
    }
    @Override /*스터디 상세 조회*/
    public Study getStudy(int study_id) {
        return studyDao.getStudy(study_id);
    }
    @Override /*스터디 카테고리별 조회*/
    public List<Study> getStudyCategory(String study_category) {
        return studyDao.getStudyCategory(study_category);
    }
}
