package com.example.demo.controller;

import com.example.demo.domain.Comment;
import com.example.demo.domain.Study;
import com.example.demo.service.StudyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/study")
@Component
public class StudyController {

	@Autowired
	private StudyService studyService;

    //스터디 등록
    @ResponseBody
    @RequestMapping(value="/register", method=RequestMethod.POST)
    public Study registerStudy(HttpServletRequest request, @RequestBody Map<String, Object> paramMap) throws ParseException {
       String[] studyInfo = new String[9];
       int i = 0;

       for (Map.Entry<String, Object> pair : paramMap.entrySet())
       {
           studyInfo[i] = pair.getValue().toString();
           i++;
       }
       Study study = new Study();
       study.setStudy_title(studyInfo[0]);
       study.setStudy_category(studyInfo[1]);
       study.setStudy_num(Integer.parseInt(studyInfo[2]));
       study.setStudy_onoff(studyInfo[3]);
       study.setStudy_region(studyInfo[4]);
       study.setWriter(studyInfo[5]);
       study.setStudy_content(studyInfo[6]);
       study.setStudy_create_date(studyInfo[7]);
       study.setStudy_state(studyInfo[8]);

       System.out.println(study);
       studyService.registerStudy(study);
       return study;
    }

    //스터디 전체 조회
    @GetMapping(value = "/list")
    public List<Study> getStudyList() {
        return studyService.getStudyList();
    }

    //스터디 상세 조회
    @GetMapping(value = "/list/{study_id}")
    public Study getStudy(@PathVariable("study_id") int study_id) {
        Study study = studyService.getStudy(study_id);
        return study;
    }
    //스터디 카테고리별 조회
    @GetMapping(value = "/list/category/{study_category}")
    public List<Study> getStudyCategory(@PathVariable("study_category") String study_category) {
        List<Study> study = studyService.getStudyCategory(study_category);
        System.out.println(study_category);
        return study;
    }
}