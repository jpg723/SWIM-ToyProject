package com.example.demo.dao.mybatis.mapper;

import org.apache.ibatis.annotations.Mapper;

import com.example.demo.domain.Member;

@Mapper
public interface MemberMapper {
  
	void registerMember(Member member); //회원가입
	Member loginMember(String user_id, String password); //로그인
}