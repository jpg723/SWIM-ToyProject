package com.example.demo.service;

import com.example.demo.domain.Member;
import com.example.demo.domain.Study;

import java.util.List;

public interface StudyService {

    void registerStudy(Study study); //스터디 등록
    List<Study> getStudyList(); //스터디 리스트 조회
    Study getStudy(int study_id); //스터디 상세 조회
    List<Study> getStudyCategory(String study_category); //스터디 카테고리별 조회
}
