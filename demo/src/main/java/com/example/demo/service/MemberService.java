package com.example.demo.service;

import com.example.demo.domain.Member;

public interface MemberService {
	
	//회원가입
	void registerMember(Member member);
	//로그인
	Member loginMember(String user_id, String password);
}
