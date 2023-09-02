package com.example.demo.service;

import com.example.demo.domain.Member;
import org.springframework.stereotype.Service;

public interface MemberService {
	void registerMember(Member member);
	Member findByIdAndPassword(String user_id, String password);
}
