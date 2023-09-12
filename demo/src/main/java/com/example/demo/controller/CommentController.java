package com.example.demo.controller;

import com.example.demo.domain.Comment;
import com.example.demo.domain.Study;
import com.example.demo.service.CommentService;
import com.example.demo.service.StudyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.text.ParseException;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/comment")
@Component
public class CommentController {

	@Autowired
	private CommentService commentService;

    //댓글 등록
    @ResponseBody
    @RequestMapping(value="/register", method=RequestMethod.POST)
    public Comment registerComment(HttpServletRequest request, @RequestBody Map<String, Object> paramMap) throws ParseException {
       String[] commentInfo = new String[4];
       int i = 0;

       for (Map.Entry<String, Object> pair : paramMap.entrySet())
       {
           commentInfo[i] = pair.getValue().toString();
           i++;
       }
       Comment comment = new Comment();
        comment.setComment_id(Integer.parseInt(commentInfo[0]));
       comment.setWriter(commentInfo[1]);
       comment.setComment_create_date(commentInfo[2]);
       comment.setComment_content(commentInfo[3]);

       System.out.println(comment);
       commentService.registerComment(comment);
       return comment;
    }

    //댓글 조회
    @GetMapping(value = "/list/{comment_id}")
    public Comment getComment(@PathVariable("comment_id") int comment_id) {
        Comment comment = commentService.getComment(comment_id);
        return comment;
    }
}