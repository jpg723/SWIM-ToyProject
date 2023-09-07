package com.example.demo.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import com.example.demo.dao.MemberDao;
import com.example.demo.domain.Member;


@Service
public class MemberServiceImpl implements MemberService {

	@Autowired
	private MemberDao memberDao;

	@Override /*회원가입*/
	public void registerMember(Member member) {

		memberDao.registerMember(member);
	}

	@Override /*로그인*/
	public Member loginMember(String user_id, String password) {
		// TODO Auto-generated method stub
		return memberDao.loginMember(user_id, password);
	}
}